import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { skillGroups, allSkills } from "../skills";

export default function Skills() {
  const [view, setView] = useState("categories");
  const [selectedGroup, setSelectedGroup] = useState(null);
  const visibleSkills = selectedGroup
    ? skillGroups.find((group) => group.name === selectedGroup)?.skills || allSkills
    : allSkills;

  const showCategories = () => { setView("categories"); setSelectedGroup(null); };
  const showIcons = () => { setView("icons"); };

  return (
    <section id="skills" className="reference-skills px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="skills-heading">
          <div>
            <p className="reference-kicker">Skills I'm Good At</p>
            <h2 className="reference-heading">SKILLS</h2>
          </div>
          <div className="skills-switch" role="group" aria-label="Skills view">
            <button className={`skill-switch-button ${view === "categories" ? "active" : ""}`} onClick={showCategories} aria-pressed={view === "categories"}>Categories</button>
            <button className={`skill-switch-button ${view === "icons" ? "active" : ""}`} onClick={showIcons} aria-pressed={view === "icons"}>Icons</button>
          </div>
        </div>

        {view === "categories" ? (
          <div className="skill-categories">
            {skillGroups.map((group) => (
              <button
                key={group.name}
                className="skill-category"
                onClick={() => { setSelectedGroup(group.name); setView("icons"); }}
              >
                <span className="skill-category-title">{group.name}</span>
                <span className="skill-category-bottom">
                  <span>{group.detail}</span>
                  <span className="skill-category-icons">
                    {group.skills.filter((item) => item.icon).slice(0, 3).map((item) => (
                      <img key={item.name} src={item.icon} alt="" loading="lazy" width="28" height="28" />
                    ))}
                  </span>
                  <ArrowUpRight size={20} />
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div>
            <div className="skills-detail-bar">
              <span>{selectedGroup || "All skills"}</span>
              {selectedGroup && (
                <button className="skill-switch-button" onClick={() => setSelectedGroup(null)}>Show all skills</button>
              )}
            </div>
            <div className="skill-cloud">
              {visibleSkills.map((item) => (
                <div className="reference-skill" key={item.name} tabIndex={0} aria-label={item.name}>
                  {item.icon ? <img className="skill-icon" src={item.icon} alt="" loading="lazy" width="92" height="92" /> : <span className="skill-name-mark">{item.name}</span>}
                  <span className="skill-tooltip">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
