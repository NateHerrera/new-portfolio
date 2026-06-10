import { motion } from "framer-motion";

const fadeUp = {
	initial: { opacity: 0, y: 20 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: { duration: 0.5 },
};

export const AboutTab = () => {
	return (
		<div className="w-full max-w-2xl mx-auto flex flex-col gap-12 py-8">
			{/* Bio */}
			<motion.div {...fadeUp} className="flex flex-col gap-2">
				<p className="text-xs text-muted-foreground font-mono">~/about</p>
				<h2 className="text-2xl font-bold">{">"} whoami</h2>
				<p className="text-sm leading-relaxed text-muted-foreground">
					Recent graduate from The University of Texas at San Antonio with a
					B.S. in Computer Science and a 3.8 GPA. Passionate about software
					engineering, full-stack development, and cloud technologies, with
					experience spanning web applications, backend systems, data
					engineering, and IT support. Currently focused on building impactful
					projects, expanding expertise in modern development tools, and
					pursuing opportunities to grow as a software engineer.
				</p>
			</motion.div>

			{/* Divider */}
			<div className="border-t border-dashed border-muted-foreground/30" />

			{/* Work Experience */}
			<motion.div {...fadeUp} className="flex flex-col gap-6">
				<p className="text-xs text-muted-foreground font-mono">~/experience</p>
				<h2 className="text-2xl font-bold">{">"} work</h2>

				{/* Timeline */}
				<div className="relative flex flex-col gap-8 pl-6 border-l-2 border-dashed border-muted-foreground/40">
					{/* Entry */}
					<motion.div {...fadeUp} className="relative flex flex-col gap-1">
						<div className="absolute -left-[1.45rem] w-4 h-4 rounded-full bg-green-400 border-2 border-background" />
						<p className="text-xs text-muted-foreground">Jan 2025 - May 2026</p>
						<h3 className="font-bold">UTSA Computer Science Department</h3>
						<p className="text-xs text-muted-foreground italic">
							Student Grader I
						</p>
						<p className="text-sm leading-relaxed text-muted-foreground">
							• Facilitating academic operations by evaluating technical
							assignments and providing structured feedback to support student
							learning objectives in the CS department.
						</p>
					</motion.div>
					<motion.div {...fadeUp} className="relative flex flex-col gap-1">
						<div className="absolute -left-[1.45rem] w-4 h-4 rounded-full bg-green-400 border-2 border-background" />
						<p className="text-xs text-muted-foreground">Oct 2024 - Dec 2024</p>
						<h3 className="font-bold">UTSA Facilities</h3>
						<p className="text-xs text-muted-foreground italic">
							Information Technology Intern
						</p>
						<p className="text-sm leading-relaxed text-muted-foreground">
							• Managed hardware deployment by flashing and booting Windows 11
							images to 50+ enterprise workstations via BIOS and system-level
							configurations. <br></br>• Implemented custom query tools within
							the TMA work order management system to streamline facilities
							maintenance tracking.
						</p>
					</motion.div>
					<motion.div {...fadeUp} className="relative flex flex-col gap-1">
						<div className="absolute -left-[1.45rem] w-4 h-4 rounded-full bg-green-400 border-2 border-background" />
						<p className="text-xs text-muted-foreground">
							May 2023 - August 2023
						</p>
						<h3 className="font-bold">Ready to Work SA</h3>
						<p className="text-xs text-muted-foreground italic">
							Data Science Intern
						</p>
						<p className="text-sm leading-relaxed text-muted-foreground">
							• Automated data quality workflows using Microsoft Power BI to
							rectify 1,300+ participant records, ensuring 100% data integrity
							for system migration. <br></br>• Executed 700+ targeted data
							corrections to enhance pipeline reliability and ensure seamless
							transfer of information to a new case management system. <br></br>
							• Developed data visualizations based on multi-state datasets to
							enhance strategic planning for the COSA workforce program.
						</p>
					</motion.div>
				</div>
			</motion.div>

			{/* Divider */}
			<div className="border-t border-dashed border-muted-foreground/30" />

			{/* Education */}
			<motion.div {...fadeUp} className="flex flex-col gap-6">
				<p className="text-xs text-muted-foreground font-mono">~/education</p>
				<h2 className="text-2xl font-bold">{">"} education</h2>

				<div className="relative flex flex-col gap-8 pl-6 border-l-2 border-dashed border-muted-foreground/40">
					<motion.div {...fadeUp} className="relative flex flex-col gap-1">
						<div className="absolute -left-[1.45rem] w-4 h-4 rounded-full bg-blue-400 border-2 border-background" />
						<p className="text-xs text-muted-foreground">2024 — 2026</p>
						<h3 className="font-bold">University of Texas at San Antonio</h3>
						<p className="text-xs text-muted-foreground italic">
							B.S. Computer Science — 3.88 GPA
						</p>
						<p className="text-sm leading-relaxed text-muted-foreground">
							At The University of Texas at San Antonio, I completed advanced
							coursework in Software Engineering, Data Structures & Algorithms,
							Operating Systems, and Computer Architecture while serving as a
							grader/teaching assistant and in house IT intern.
						</p>
					</motion.div>
					<motion.div {...fadeUp} className="relative flex flex-col gap-1">
						<div className="absolute -left-[1.45rem] w-4 h-4 rounded-full bg-blue-400 border-2 border-background" />
						<p className="text-xs text-muted-foreground">2022 — 2024</p>
						<h3 className="font-bold">St. Philip's College | Alamo Colleges</h3>
						<p className="text-xs text-muted-foreground italic">
							Computer Science — 4.0 GPA
						</p>
						<p className="text-sm leading-relaxed text-muted-foreground">
							Presidential Scholar. Completed coursework in Computer Science
							before transferring to UTSA.
						</p>
					</motion.div>
					<motion.div {...fadeUp} className="relative flex flex-col gap-1">
						<div className="absolute -left-[1.45rem] w-4 h-4 rounded-full bg-blue-400 border-2 border-background" />
						<p className="text-xs text-muted-foreground">2018 — 2022</p>
						<h3 className="font-bold">Floresville High School</h3>
						<p className="text-xs text-muted-foreground italic">
							High School Diploma — 3.7 GPA
						</p>
						<p className="text-sm leading-relaxed text-muted-foreground">
							I graduated high school a semester early to begin my college
							journey ahead of schedule and pursue my passion for technology.
						</p>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
};
