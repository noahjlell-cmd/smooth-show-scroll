import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

const TeamCard = ({ member }: { member: TeamMember }) => {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="relative overflow-hidden cursor-pointer group"
        style={{ aspectRatio: "3/4" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setOpen(true)}
      >
        {/* Photo */}
        <img
          src={member.image}
          alt={member.name}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            hovered ? "team-card-overlay-hover" : "team-card-overlay"
          }`}
        />

        {/* Click hint */}
        <div className={`absolute top-4 right-4 transition-all duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-1">
            <span className="text-white text-[10px] tracking-widest uppercase font-sans-clean">View</span>
          </div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div>
            <div className="w-8 h-px bg-white mb-3 transition-all duration-500 group-hover:w-14" />
            <h3 className="text-white font-display text-xl font-semibold leading-tight mb-1">
              {member.name}
            </h3>
            <p className="text-white/60 text-xs tracking-widest uppercase font-sans-clean font-medium">
              {member.title}
            </p>
          </div>

          {/* Bio preview on hover */}
          <div
            className={`overflow-hidden transition-all duration-500 font-sans-clean ${
              hovered ? "max-h-20 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
            }`}
          >
            <p className="text-white/70 text-xs leading-relaxed line-clamp-3">
              {member.bio}
            </p>
          </div>
        </div>
      </div>

      {/* Full Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden border-0 bg-transparent shadow-none">
          <DialogTitle className="sr-only">{member.name}</DialogTitle>
          <div className="flex flex-col md:flex-row" style={{ background: "hsl(0 0% 93%)" }}>
            {/* Image */}
            <div className="md:w-2/5 shrink-0">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 md:h-full object-cover object-top"
                style={{ minHeight: "320px" }}
              />
            </div>
            {/* Info */}
            <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center overflow-y-auto max-h-[80vh]">
              <div className="w-10 h-px mb-6" style={{ background: "hsl(0 0% 40%)" }} />
              <h2 className="font-display text-3xl font-bold mb-2" style={{ color: "hsl(0 0% 8%)" }}>
                {member.name}
              </h2>
              <p className="text-xs tracking-[0.2em] uppercase font-sans-clean mb-6" style={{ color: "hsl(0 0% 45%)" }}>
                {member.title}
              </p>
              <div className="h-px mb-6" style={{ background: "hsl(0 0% 80%)" }} />
              <p className="text-sm leading-relaxed font-sans-clean" style={{ color: "hsl(0 0% 30%)" }}>
                {member.bio}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TeamCard;
