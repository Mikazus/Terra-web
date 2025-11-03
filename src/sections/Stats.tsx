// src/components/sections/Stats.tsx

import tree from '../images/icon/tree.png'
import recycle from '../images/icon/recycle.png'
import people from '../images/icon/people.png'
import Edu from '../images/icon/Edu.png'

// Data untuk stats
const stats = [
  { 
    icon: tree, 
    value: "5,000+", 
    label: "trees planted" 
  },
  { 
    icon: people, 
    value: "1,200+", 
    label: "Active volunteer" 
  },
  { 
    icon: recycle, 
    value: "3 Tons", 
    label: "Accumulated Rubbish" 
  },
  { 
    icon: Edu, 
    value: "50+", 
    label: "Educated School" 
  },
];

// Tipe data untuk props StatItem
type StatItemProps = {
  icon: string; // image src
  value: string;
  label: string;
};

// Komponen untuk satu item stat
const StatItem = ({ icon, value, label }: StatItemProps) => (
  <div className="flex flex-col rounded-2xl bg-[#EFFADE] items-center text-center p-4">
    <div className="h-[50px] w-[53px] flex items-center justify-center">
      <img src={icon} alt={label} className="max-h-full max-w-full object-contain" />
    </div>
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