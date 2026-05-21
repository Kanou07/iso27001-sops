import { SOP } from '@/data/sops';
import { X, Download, Share2, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Streamdown } from 'streamdown';

interface SOPDetailProps {
  sop: SOP;
  onClose: () => void;
}

export default function SOPDetail({ sop, onClose }: SOPDetailProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set([sop.sections[0]?.id]));

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'compliant':
        return <span className="status-compliant">✓ Sesuai</span>;
      case 'review-needed':
        return <span className="status-review">⚠ Perlu Ditinjau</span>;
      case 'non-compliant':
        return <span className="status-non-compliant">✗ Tidak Sesuai</span>;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-end sm:justify-center">
      <div className="bg-white w-full sm:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto rounded-t-lg sm:rounded-lg shadow-xl animate-in slide-in-from-bottom-10 sm:slide-in-from-center-0">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-border p-6 flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-foreground">{sop.title}</h2>
              {getStatusBadge(sop.status)}
            </div>
            <p className="text-muted-foreground">{sop.description}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Metadata */}
          <div className="grid grid-cols-3 gap-4 bg-secondary/30 rounded-lg p-4">
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase">Status</p>
              <p className="text-sm font-medium text-foreground mt-1">
                {sop.status === 'compliant' ? 'Sesuai' : sop.status === 'review-needed' ? 'Perlu Ditinjau' : 'Tidak Sesuai'}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase">Kelengkapan</p>
              <p className="text-sm font-medium text-foreground mt-1">{sop.completionPercentage}%</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase">Terakhir Ditinjau</p>
              <p className="text-sm font-medium text-foreground mt-1">
                {new Date(sop.lastReviewed).toLocaleDateString('id-ID')}
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-sm max-w-none">
            <Streamdown>{sop.content}</Streamdown>
          </div>

          {/* Sections */}
          <div className="space-y-3 border-t border-border pt-6">
            <h3 className="text-lg font-semibold text-foreground">Bagian-Bagian SOP</h3>
            {sop.sections.map((section) => (
              <div key={section.id} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-4 py-3 bg-secondary/30 hover:bg-secondary transition-colors flex items-center justify-between"
                >
                  <span className="font-medium text-foreground">{section.title}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      expandedSections.has(section.id) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedSections.has(section.id) && (
                  <div className="px-4 py-3 bg-white border-t border-border text-sm text-muted-foreground">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white border-t border-border p-6 flex gap-3 justify-end">
          <Button variant="outline" onClick={onClose}>
            Tutup
          </Button>
          <Button variant="default" className="gap-2">
            <Download className="w-4 h-4" />
            Unduh PDF
          </Button>
          <Button variant="outline" className="gap-2">
            <Share2 className="w-4 h-4" />
            Bagikan
          </Button>
        </div>
      </div>
    </div>
  );
}
