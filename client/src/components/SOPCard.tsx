import { SOP } from '@/data/sops';
import { ChevronRight, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SOPCardProps {
  sop: SOP;
  onView: (sop: SOP) => void;
}

export default function SOPCard({ sop, onView }: SOPCardProps) {
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
    <div className="sop-card group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {sop.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{sop.description}</p>
        </div>
        {getStatusBadge(sop.status)}
      </div>

      <div className="space-y-3 mb-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-muted-foreground">Kelengkapan</span>
            <span className="text-xs font-semibold text-foreground">{sop.completionPercentage}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${sop.completionPercentage}%` }}
            />
          </div>
        </div>

        <div className="text-xs text-muted-foreground">
          Terakhir ditinjau: <span className="font-medium">{new Date(sop.lastReviewed).toLocaleDateString('id-ID')}</span>
        </div>
      </div>

      <div className="flex gap-2 pt-4 border-t border-border">
        <Button
          onClick={() => onView(sop)}
          variant="default"
          size="sm"
          className="flex-1 gap-2"
        >
          <Eye className="w-4 h-4" />
          Lihat Detail
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
        >
          <Download className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
