"use client";

import { FaJs, FaReact, FaNode, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Github,
  Instagram,
  MessageCircle,
  ExternalLink,
  Volume2,
  ArrowDown,
  VolumeX,
  Heart,
  Star
} from "lucide-react";

const PageCover = ({ onEnter }: { onEnter: () => void }) => {
  return (
    <div
      className="fixed inset-0 bg-[var(--bg-color)] z-50 flex items-center justify-center cursor-pointer"
      onClick={onEnter}
    >
      <div className="text-[var(--white)] text-opacity-0 text-6xl font-bold animate-pulse hover:scale-110 transition-transform select-none relative group">
        <span className="absolute -inset-0.5 group-hover:opacity-100 transition duration-1000"></span>
        <span className="relative text-[var(--yellow)]">Click to Enter</span>
      </div>
    </div>
  );
};

interface MediaItem {
  type: 'image' | 'video';
  url: string;
  description: string;
}

export default function Portfolio() {
  const [showCover, setShowCover] = useState(true);
  const [projects, setProjects] = useState([]);
  const [audioInstance, setAudioInstance] = useState<HTMLAudioElement | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const music = "https://cdn.discordapp.com/attachments/1303847235943137440/1334747574938108004/Download_2.mp4?ex=679da80c&is=679c568c&hm=97f5d2e8a1e3f700f8114ec04f9ef40f50c1846c7ad5b1b61591ecb00a023464&";

  const galleryItems: MediaItem[] = [
    {
      type: 'image',
      url: '/foto1.jpg',
      description: 'My girlfriend is very amazing'
    },
    {
      type: 'video',
      url: '/video1.mp4',
      description: 'My girlfriend is very amazing ( 2x )'
    },
    {
      type: 'image',
      url: '/foto2.jpg',
      description: 'My girlfriend is very cute'
    },
    {
      type: 'image',
      url: '/foto3.png',
      description: 'My girlfriend is very stylish'
    },
    {
      type: 'image',
      url: '/foto4.png',
      description: 'My girlfriend is very funny'
    },
    {
      type: 'video',
      url: '/video2.mp4',
      description: 'My girlfriend is very funny ( 2x )'
    }
  ];

  useEffect(() => {
    fetch("https://gh-pinned-repos-tsj7ta5xfhep.deno.dev/?username=crynew")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleClick = () => {
    setShowCover(false);

    if (music && !audioInstance) {
      const audio = new Audio(music);
      audio.loop = true;
      audio.play().catch((err) => console.error("Failed to play audio:", err));
      setAudioInstance(audio);
    }
  };

  const handleMusicClick = () => {
    if (audioInstance) {
      if (audioInstance.paused) {
        audioInstance
          .play()
          .catch((err) => console.error("Failed to play audio:", err));
        setAudioInstance(audioInstance);
      } else {
        audioInstance.pause();
        setAudioInstance(null);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioInstance) {
        audioInstance.pause();
        audioInstance.src = "";
      }
    };
  }, [audioInstance]);

  const skills = [
    {
      name: "JavaScript",
      percentage: 90,
      icon: <FaJs className="text-yellow-500 w-6 h-6" />,
    },
    {
      name: "TypeScript",
      percentage: 85,
      icon: <SiTypescript className="text-blue-500 w-6 h-6" />,
    },
    {
      name: "React",
      percentage: 80,
      icon: <FaReact className="text-cyan-500 w-6 h-6" />,
    },
    {
      name: "Next.js",
      percentage: 75,
      icon: <SiNextdotjs className="text-gray-500 w-6 h-6" />,
    },
    {
      name: "Tailwind CSS",
      percentage: 70,
      icon: <SiTailwindcss className="text-teal-500 w-6 h-6" />,
    },
    {
      name: "Node.js",
      percentage: 80,
      icon: <FaNode className="text-green-500 w-6 h-6" />,
    },
    {
      name: "Git",
      percentage: 85,
      icon: <FaGitAlt className="text-orange-500 w-6 h-6" />,
    },
    {
      name: "SQL",
      percentage: 70,
      icon: <SiPostgresql className="text-blue-700 w-6 h-6" />,
    },
    {
      name: "NoSQL",
      percentage: 65,
      icon: <SiMongodb className="text-green-600 w-6 h-6" />,
    },
  ];

  const projectsOwner = [
    {
      name: "Victims.lol",
      description:
        "A biography platform where you can create profiles for yourself and your Discord friends. Add a splash of color, choose a background, and let the music play!",
      url: "https://victims.lol",
    },
    {
      name: "TradeNode.org",
      description:
        "An innovative trading platform that combines automated trading strategies with advanced market analysis. Built with modern technologies to provide real-time market data and execution capabilities..",
      url: "https://tradenode.org",
    },
    {
      name: "Icord.cc",
      description:
        "A platform focused on providing icons, GIFs, and banners for Discord profiles, where users and GIF servers can share their favorite icons and promote their servers.",
      url: "https://icord.cc",
    },
  ];

  return (
    <>
      {showCover ? (
        <PageCover onEnter={handleClick} />
      ) : (
        <div className="min-h-screen bg-[var(--bg-color)] text-[var(--white)]">
          <button
            onClick={handleMusicClick}
            className="fixed top-4 right-4 z-50 p-3 rounded-lg bg-[var(--white)] backdrop-blur-sm hover:bg-gray-700/50 transition-all"
          >
            {audioInstance ? (
              <Volume2 className="w-6 h-6 text-[var(--yellow)]" />
            ) : (
              <VolumeX className="w-6 h-6 text-[var(--yellow)]" />
            )}
          </button>

          <div className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[var(--bg-color)]"></div>
            <div className="relative z-10 text-center">
              <div className="relative w-48 h-48 mx-auto mb-8">
                <Image
                  src="https://camilo404.azurewebsites.net/v1/avatar/1197309324997968005"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full ring-4 ring-[var(--yellow)]"
                />
              </div>
              <h1 className="text-6xl font-bold mb-4 text-[var(--white)]">
                Brunno
              </h1>
              <p className="text-[var(--white-two)] mb-8">
                Full Stack Developer
              </p>
              <div className="flex gap-6 justify-center">
                <a
                  href="https://github.com/crynew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-all"
                >
                  <Github className="w-8 h-8 text-[var(--white-two)] hover:text-[var(--yellow)]" />
                </a>
                <a
                  href="https://instagram.com/imsbrunno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-all"
                >
                  <Instagram className="w-8 h-8 text-[var(--white-two)] hover:text-[var(--yellow)]" />
                </a>
                <a
                  href="mailto:brunno@victims.bio"
                  className="transform hover:scale-110 transition-all"
                >
                  <MessageCircle className="w-8 h-8 text-[var(--white-two)] hover:text-[var(--yellow)]" />
                </a>
              </div>
            </div>
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[var(--bg-color)] to-transparent"></div>
            <div className="absolute bottom-4 right-4">
              <div className="w-14 h-14 flex items-center justify-center bg-[var(--white)] rounded-xl shadow-lg">
                <a
                  href="#gallery"
                  className="flex items-center justify-center"
                >
                  <ArrowDown className="w-8 h-8 text-[var(--yellow)]" />
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20" id="gallery">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-[var(--yellow)]" />
                <h2 className="text-3xl font-bold text-[var(--white)]">My Girlfriend</h2>
              </div>
              <p className="text-[var(--white-two)]">Is a beautiful girl</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedMedia(item)}
                  className="group relative cursor-link bg-[var(--neutral-one)]/80 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                >
                  <div className="relative">
                    {item.type === 'image' ? (
                      <img
                        src={item.url}
                        alt={item.description}
                        className="w-full object-cover"
                      />
                    ) : (
                      <video
                        src={item.url}
                        className="w-full"
                        preload="metadata"
                        muted
                        playsInline
                      >
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-[var(--white)] text-center">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedMedia && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedMedia(null)}
            >
              <div className="max-w-4xl w-full">
                {selectedMedia.type === 'image' ? (
                  <img
                    src={selectedMedia.url}
                    alt={selectedMedia.description}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                ) : (
                  <video
                    src={selectedMedia.url}
                    controls={false}
                    className="w-full h-auto max-h-[80vh]"
                    autoPlay
                  />
                )}
                <p className="text-[var(--white)] text-center mt-4">{selectedMedia.description}</p>
              </div>
            </div>
          )}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <h2
              className="text-3xl font-bold mb-12 text-center text-[var(--white)]"
              id="projects"
            >
              Projects
            </h2>
            <p className="text-[var(--white-two)] mb-8 mt-[-35px] text-center">
              Here are some of the projects I have worked on:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsOwner.map((project: any, index) => (
                <div
                  key={index}
                  className="group relative bg-[var(--neutral-one)]/80 backdrop-blur-sm shadow-lg p-6 rounded-lg hover:scale-105 transition-transform"
                >
                  <h3 className="text-lg font-semibold text-[var(--white)]">
                    {project.name}
                  </h3>
                  <p className="text-[var(--white-two)] mt-2">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-20">
            <div className="col-span-2 text-center">
              <h2 className="text-3xl font-bold mb-4 text-[var(--white)]">
                Skills
              </h2>
              <p className="text-[var(--white-two)] mb-8">
                Here are some of the skills I have acquired over the years:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative bg-[var(--neutral-one)]/80 backdrop-blur-sm shadow-lg p-6 rounded-lg hover:scale-105 transition-transform"
                >
                  <div className="flex items-center gap-4">
                    <div>{skill.icon}</div>
                    <h3 className="text-lg font-semibold text-[var(--white)]">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="mt-4">
                    <div className="w-full bg-[var(--bg-color)] rounded-full h-2">
                      <div
                        className="bg-[var(--yellow)] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 -top-10 hidden group-hover:block bg-[var(--bg-color)] text-[var(--white)] text-sm py-1 px-3 rounded-lg shadow-md">
                    {skill.percentage}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 mt-20">
            <h2
              className="text-3xl font-bold mb-12 text-center text-[var(--white)]"
              id="repositories"
            >
              Repositories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project: any, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-[var(--bg-color)] hover:bg-[var(--yellow)] hover:border-[var(--yellow)] border rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative hover:scale-110 bg-[var(--neutral-one)]/80 backdrop-blur-sm rounded-xl overflow-hidden hover:transform transition-all duration-300">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <Image
                            src={project.owner ? project.owner === "Victims-Team/" ? "https://avatars.githubusercontent.com/u/175876903?v=4" : `https://github.com/${project.owner}.png` : `https://github.com/${project.owner || "default-user"}.png`}
                            alt={project.owner || "default-user"}
                            onError={(e) => e.currentTarget.src = "https://avatars.githubusercontent.com/u/175876903?v=4"}
                            width={40}
                            height={40}
                            className="rounded-full border-2 border-[var(--yellow)]"
                          />

                          <div>
                            <h3 className="text-xl font-semibold text-[var(--white)] mb-1">
                              {project.repo}
                            </h3>
                            <p className="text-sm text-[var(--neutral)]">
                              by {project.owner}
                            </p>
                          </div>
                        </div>
                        <a
                          href={`https://github.com/${project.owner}/${project.repo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            cursor: `url('/link.png'), auto`,
                          }}
                          className="text-[var(--yellow)] hover:text-[var(--white-two)]"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-[var(--neutral)]">
                        {project.language && (
                          <div className="flex items-center bg-black text-[var(--yellow)] rounded-full px-2 py-1">
                            <div className={`w-3 h-3 rounded-full mr-2`} style={{ backgroundColor: project.languageColor }}></div>
                            {project.language}
                          </div>
                        )}
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-[var(--yellow)] mr-1" />
                          {project.stars.toLocaleString() || "0"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}