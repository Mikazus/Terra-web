// src/components/sections/Stats.tsx

import { FaTree, FaUsers, FaRecycle, FaSchool } from 'react-icons/fa'

// Data untuk stats
const stats = [
  { 
    icon: FaTree, 
    value: "5,000+", 
    label: "trees planted" 
  },
  { 
    icon: FaUsers, 
    value: "1,200+", 
    label: "Active volunteer" 
  },
  { 
    icon: FaRecycle, 
    value: "3 Tons", 
    label: "Accumulated Rubbish" 
  },
  { 
    icon: FaSchool, 
    value: "50+", 
    label: "Educated School" 
  },
];

// Tipe data untuk props StatItem
type StatItemProps = {
  icon: React.ElementType;
  value: string;
  label: string;
};

// Komponen untuk satu item stat
const StatItem = ({ icon: Icon, value, label }: StatItemProps) => (
  <div className="flex flex-col items-center text-center p-4">
    <Icon className="h-12 w-12 text-brand-green-medium mb-4" />
    <span className="text-3xl font-bold text-brand-green-dark">{value}</span>
    <span className="text-base text-gray-600">{label}</span>
  </div>
);

// Komponen utama Stats
const Stats = () => {
  return (
    // Latar belakang putih dengan padding
    <div className="bg-white py-16 sm:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid untuk 4 kolom di desktop, 2 di tablet, 1 di mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatItem 
              key={stat.label} 
              icon={stat.icon} 
              value={stat.value} 
              label={stat.label} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats