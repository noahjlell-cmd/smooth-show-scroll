import { useState } from "react";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

const TeamCard = ({ member }: { member: TeamMember }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden cursor-pointer group"
      style={{ aspectRatio: "3/4" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Photo */}
      <img
        src={member.image}
        alt={member.name}
        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient overlay - always visible at bottom */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          hovered ? "team-card-overlay-hover" : "team-card-overlay"
        }`}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        {/* Name & Title - always visible */}
        <div
          className={`transition-all duration-500 ${
            hovered ? "translate-y-0" : "translate-y-0"
          }`}
        >
          <div className="w-8 h-px bg-primary mb-3 transition-all duration-500 group-hover:w-14" />
          <h3 className="text-white font-display text-xl font-semibold leading-tight mb-1">
            {member.name}
          </h3>
          <p className="text-gold text-xs tracking-widest uppercase font-sans-clean font-medium">
            {member.title}
          </p>
        </div>

        {/* Bio - slides up on hover */}
        <div
          className={`overflow-hidden transition-all duration-500 font-sans-clean ${
            hovered ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <p className="text-white/80 text-sm leading-relaxed line-clamp-6">
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
