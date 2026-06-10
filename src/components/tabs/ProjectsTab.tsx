import { motion, AnimatePresence } from "framer-motion";
import {
	FileTs,
	FileSql,
	FileJs,
	ArrowSquareOut,
	FileJsIcon,
	FileSqlIcon,
	FileTsIcon,
} from "@phosphor-icons/react";
import { useState } from "react";

const projects = [
	{
		id: "eqify",
		filename: "eqify.exe",
		icon: FileJsIcon,
		status: "completed",
		title: "Eqify",
		description:
			"A browser audio equalizer Chrome extension built with Manifest V3 and the Web Audio API. Features a preset system, BiquadFilterNode processing, and a clean UI built with Bulma CSS.",
		stack: ["JavaScript", "Manifest V3", "Web Audio API", "Bulma CSS"],
		github: "https://github.com/NateHerrera/audio-master-extension",
		live: "https://chromewebstore.google.com/detail/eqify-audio-master/pbpkmpkfafngdklghbkpbpeojldpchil",
	},
	{
		id: "etl",
		filename: "etl-pipeline.sql",
		icon: FileSqlIcon,
		status: "completed",
		title: "ETL Database Pipeline",
		description:
			"Bulk-imported ~4.9M rows of dirty equipment data into MySQL on a resource-constrained AWS EC2 instance. Built a web frontend, expanded schema, and a REST API in PHP with 12 endpoints using a router pattern.",
		stack: ["MySQL", "PHP", "AWS EC2", "REST API"],
		github: "https://github.com/NateHerrera/etl-pipeline",
		live: null,
	},
	{
		id: "portfolio",
		filename: "portfolio.tsx",
		icon: FileTsIcon,
		status: "in progress",
		title: "Portfolio",
		description:
			"This site — a retro OS-inspired portfolio built with React, TypeScript, Vite, and Shadcn. Features a folder/tab system, framer motion animations, and a fully responsive layout.",
		stack: ["React", "TypeScript", "Vite", "Shadcn", "Framer Motion"],
		github: "https://github.com/NateHerrera/portfolio",
		live: null,
	},
];

const statusStyles: Record<string, string> = {
	completed: "bg-green-100 text-green-700 border border-green-300",
	"in progress": "bg-yellow-100 text-yellow-700 border border-yellow-300",
	archived: "bg-gray-100 text-gray-500 border border-gray-300",
};

export const ProjectsTab = () => {
	const [activeProject, setActiveProject] = useState<string | null>(null);

	const toggle = (id: string) => {
		setActiveProject(activeProject === id ? null : id);
	};

	return (
		<div className="w-full max-w-2xl mx-auto flex flex-col gap-8 py-4 md:py-8">
			{/* Header */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="flex flex-col gap-2"
			>
				<p className="text-xs text-muted-foreground font-mono">~/projects</p>
				<h2 className="text-xl md:text-2xl font-bold">{">"} ls projects/</h2>
				<p className="text-xs text-muted-foreground font-mono">
					{projects.length} files — click to expand
				</p>
			</motion.div>

			{/* File list */}
			<div className="flex flex-col gap-2">
				{projects.map((project, i) => {
					const Icon = project.icon;
					const isOpen = activeProject === project.id;

					return (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
							className="border-2 border-dashed border-muted-foreground/30 rounded-lg overflow-hidden"
						>
							{/* File row */}
							<div
								onClick={() => toggle(project.id)}
								className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-black/5 transition-colors"
							>
								<Icon size={20} className="shrink-0 text-muted-foreground" />
								<span className="text-sm font-mono font-bold flex-1">
									{project.filename}
								</span>
								<span
									className={`text-xs font-mono px-2 py-0.5 rounded-full ${statusStyles[project.status]}`}
								>
									{project.status}
								</span>
								<motion.span
									animate={{ rotate: isOpen ? 90 : 0 }}
									transition={{ duration: 0.2 }}
									className="text-muted-foreground text-xs font-mono"
								>
									▶
								</motion.span>
							</div>

							{/* Expanded content */}
							<AnimatePresence>
								{isOpen && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3 }}
										className="overflow-hidden"
									>
										<div className="px-4 pb-4 flex flex-col gap-3 border-t border-dashed border-muted-foreground/20">
											<p className="text-xs md:text-sm text-muted-foreground leading-relaxed pt-3">
												{project.description}
											</p>

											{/* Stack tags */}
											<div className="flex flex-wrap gap-2">
												{project.stack.map((tech) => (
													<span
														key={tech}
														className="text-xs font-mono px-2 py-0.5 bg-black/5 rounded border border-muted-foreground/20"
													>
														{tech}
													</span>
												))}
											</div>

											{/* Links */}
											<div className="flex gap-3">
												<a
													href={project.github}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-1 text-xs font-mono font-bold hover:underline"
												>
													<ArrowSquareOut size={14} />
													GitHub
												</a>
												{project.live && (
													<a
														href={project.live}
														target="_blank"
														rel="noopener noreferrer"
														className="flex items-center gap-1 text-xs font-mono font-bold hover:underline"
													>
														<ArrowSquareOut size={14} />
														Live
													</a>
												)}
											</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};
