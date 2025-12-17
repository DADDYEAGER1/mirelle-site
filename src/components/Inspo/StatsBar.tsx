// src/components/Inspo/StatsBar.tsx
'use client';

interface StatItemProps {
  icon: string;
  value: string;
  label: string;
  color: string;
}

function StatItem({ icon, value, label, color }: StatItemProps) {
  const colorClasses = {
    burgundy: 'from-burgundy-100 to-burgundy-200 text-accent group-hover:from-burgundy-200 group-hover:to-burgundy-300',
    pink: 'from-pink-100 to-pink-200 text-pink-800 group-hover:from-pink-200 group-hover:to-pink-300',
    purple: 'from-purple-100 to-purple-200 text-purple-800 group-hover:from-purple-200 group-hover:to-purple-300',
    cream: 'from-cream-200 to-cream-300 text-accent group-hover:from-cream-300 group-hover:to-cream-400',
  };

  return (
    <div className="text-center group cursor-pointer transform hover:scale-105 transition-transform duration-300">
      <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
        {value}
      </div>
      <div className="text-sm md:text-base text-gray-600 font-medium">
        {label}
      </div>
    </div>
  );
}

export default function StatsBar() {
  const stats = [
    { icon: '💅', value: '1000+', label: 'Design Ideas', color: '#E30088' },
    { icon: '🎨', value: '25+', label: 'Style Categories', color: '#E30088' },
    { icon: '✨', value: 'Daily', label: 'New Updates', color: 'purple' },
    { icon: '🌟', value: '100k+', label: 'Inspired Users', color: 'cream' },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
