import { sopCategories } from '@/data/sops';
import { Shield, AlertTriangle, Lock, AlertCircle, BookOpen, Cog } from 'lucide-react';

interface SidebarProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-5 h-5" />,
  AlertTriangle: <AlertTriangle className="w-5 h-5" />,
  Lock: <Lock className="w-5 h-5" />,
  AlertCircle: <AlertCircle className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />,
  Cog: <Cog className="w-5 h-5" />,
};

export default function Sidebar({ selectedCategory, onSelectCategory }: SidebarProps) {
  return (
    <aside className="app-sidebar bg-white">
      <div className="p-6 border-b border-border">
        <h1 className="text-2xl font-bold text-primary">ISO 27001:2022</h1>
        <p className="text-sm text-muted-foreground mt-1">SOP Management</p>
      </div>

      <nav className="p-4">
        <button
          onClick={() => onSelectCategory(null)}
          className={`sidebar-item w-full text-left flex items-center gap-3 ${
            selectedCategory === null ? 'sidebar-item active' : ''
          }`}
        >
          <Shield className="w-5 h-5" />
          <span>Semua SOP</span>
        </button>

        <div className="mt-6">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 mb-3">
            Kategori
          </p>
          <div className="sidebar-nav">
            {sopCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`sidebar-item w-full text-left flex items-center gap-3 ${
                  selectedCategory === category.id ? 'sidebar-item active' : ''
                }`}
              >
                {iconMap[category.icon] || <Shield className="w-5 h-5" />}
                <span className="text-sm">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-secondary/30">
        <p className="text-xs text-muted-foreground text-center">
          Versi 1.0 • ISO 27001:2022
        </p>
      </div>
    </aside>
  );
}
