import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import SOPCard from '@/components/SOPCard';
import SOPDetail from '@/components/SOPDetail';
import Header from '@/components/Header';
import { sops, SOP, sopCategories } from '@/data/sops';
import { Search, Filter } from 'lucide-react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSOP, setSelectedSOP] = useState<SOP | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  // Filter SOPs based on category, search query, and status
  const filteredSOPs = sops.filter((sop) => {
    const matchesCategory = !selectedCategory || sop.category === selectedCategory;
    const matchesSearch =
      sop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sop.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = !statusFilter || sop.status === statusFilter;
    return matchesCategory && matchesSearch && matchesStatus;
  });

  const getCategoryName = (categoryId: string | null) => {
    if (!categoryId) return 'Semua SOP';
    return sopCategories.find((cat) => cat.id === categoryId)?.name || 'SOP';
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />

        <main className="flex-1 overflow-y-auto">
          {/* Search and Filter Bar */}
          <div className="sticky top-0 bg-white border-b border-border z-40">
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    {getCategoryName(selectedCategory)}
                  </h1>
                  <p className="text-muted-foreground mt-1">
                    {filteredSOPs.length} dari {sops.length} prosedur ditemukan
                  </p>
                </div>
              </div>

              {/* Search and Filter Controls */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Cari SOP..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setStatusFilter(null)}
                    className={`px-4 py-2 rounded-lg border transition-all ${
                      statusFilter === null
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border hover:bg-secondary'
                    }`}
                  >
                    Semua
                  </button>
                  <button
                    onClick={() => setStatusFilter('compliant')}
                    className={`px-4 py-2 rounded-lg border transition-all ${
                      statusFilter === 'compliant'
                        ? 'bg-green-600 text-white border-green-600'
                        : 'border-border hover:bg-secondary'
                    }`}
                  >
                    Sesuai
                  </button>
                  <button
                    onClick={() => setStatusFilter('review-needed')}
                    className={`px-4 py-2 rounded-lg border transition-all ${
                      statusFilter === 'review-needed'
                        ? 'bg-amber-600 text-white border-amber-600'
                        : 'border-border hover:bg-secondary'
                    }`}
                  >
                    Perlu Ditinjau
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="max-w-7xl mx-auto px-6 py-8">
            {filteredSOPs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSOPs.map((sop) => (
                  <SOPCard
                    key={sop.id}
                    sop={sop}
                    onView={setSelectedSOP}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Tidak ada SOP ditemukan</h3>
                <p className="text-muted-foreground">
                  Coba ubah filter kategori atau cari dengan kata kunci yang berbeda
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-border bg-secondary/30 mt-12">
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Tentang ISO 27001:2022</h4>
                  <p className="text-sm text-muted-foreground">
                    ISO/IEC 27001:2022 adalah standar internasional untuk sistem manajemen keamanan informasi yang menetapkan persyaratan untuk melindungi aset informasi organisasi.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Kategori SOP</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {sopCategories.map((cat) => (
                      <li key={cat.id}>{cat.name}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Informasi</h4>
                  <p className="text-sm text-muted-foreground">
                    Total SOP: <span className="font-semibold">{sops.length}</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Versi: <span className="font-semibold">1.0</span>
                  </p>
                </div>
              </div>
              <div className="border-t border-border mt-6 pt-6 text-center text-sm text-muted-foreground">
                <p>© 2026 ISO 27001:2022 SOP Management System. Semua hak dilindungi.</p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Detail Modal */}
      {selectedSOP && (
        <SOPDetail
          sop={selectedSOP}
          onClose={() => setSelectedSOP(null)}
        />
      )}
    </div>
  );
}
