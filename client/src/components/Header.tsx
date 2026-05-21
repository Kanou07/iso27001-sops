import { sops } from '@/data/sops';
import { CheckCircle2, AlertCircle, XCircle } from 'lucide-react';

export default function Header() {
  const compliantCount = sops.filter((s) => s.status === 'compliant').length;
  const reviewCount = sops.filter((s) => s.status === 'review-needed').length;
  const nonCompliantCount = sops.filter((s) => s.status === 'non-compliant').length;
  const avgCompletion = Math.round(
    sops.reduce((sum, s) => sum + s.completionPercentage, 0) / sops.length
  );

  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">ISO 27001:2022 SOP Management</h1>
          <p className="text-slate-300">
            Kelola Standard Operating Procedures untuk Sistem Manajemen Keamanan Informasi
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="text-sm text-slate-300">Sesuai</span>
            </div>
            <p className="text-2xl font-bold">{compliantCount}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <AlertCircle className="w-5 h-5 text-amber-400" />
              <span className="text-sm text-slate-300">Perlu Ditinjau</span>
            </div>
            <p className="text-2xl font-bold">{reviewCount}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <XCircle className="w-5 h-5 text-red-400" />
              <span className="text-sm text-slate-300">Tidak Sesuai</span>
            </div>
            <p className="text-2xl font-bold">{nonCompliantCount}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm text-slate-300">Rata-rata Kelengkapan</span>
            </div>
            <p className="text-2xl font-bold">{avgCompletion}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
