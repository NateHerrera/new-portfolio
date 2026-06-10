import {
	FolderIcon,
	FolderOpenIcon,
	FolderSimpleStarIcon,
	FolderSimpleUserIcon,
	UserIcon,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";

const folders = [
	{ key: "home", icon: FolderOpenIcon, label: "Home!" },
	{ key: "projects", icon: FolderSimpleStarIcon, label: "Projects!" },
	{ key: "about", icon: FolderSimpleUserIcon, label: "About Me!" },
	{ key: "contact", icon: FolderIcon, label: "Get in Touch!" },
];

export const HomeTab = ({
	openFolder,
}: {
	openFolder: (key: string) => void;
}) => {
	return (
		<div className="flex flex-col items-center justify-center gap-6 md:gap-8 min-h-full w-full">
			{/* Name row */}
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="flex flex-col md:flex-row gap-3 md:gap-4 items-center justify-center"
			>
				<motion.div
					whileHover={{ rotate: 10, scale: 1.1 }}
					transition={{ type: "spring", stiffness: 300 }}
				>
					<UserIcon size={64} className="md:hidden" />
					<UserIcon size={96} className="hidden md:block" />
				</motion.div>
				<div className="hidden md:block w-px h-16 bg-foreground opacity-30" />
				<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center">
					Nate Herrera
				</h1>
			</motion.div>

			{/* Subtitle */}
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.4, duration: 0.6 }}
				className="text-muted-foreground text-xs md:text-sm text-center font-mono"
			>
				{">"} Aspiring Software Engineer
			</motion.p>

			{/* Animated divider */}
			<motion.div
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 1 }}
				transition={{ delay: 0.6, duration: 0.5 }}
				className="w-32 md:w-48 h-px bg-muted-foreground/30"
			/>

			{/* Folders */}
			<div className="flex flex-wrap gap-6 md:gap-10 justify-center">
				{folders.map(({ key, icon: Icon, label }, i) => (
					<motion.div
						key={key}
						onClick={() => openFolder(key)}
						className="flex flex-col items-center cursor-pointer gap-1"
						whileHover={{ scale: 1.1, y: -4 }}
						whileTap={{ scale: 0.95 }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							delay: 0.8 + i * 0.1,
							duration: 0.4,
							scale: { duration: 0.1 },
							y: { duration: 0.1 },
						}}
					>
						<Icon size={64} className="md:hidden" />
						<Icon size={112} className="hidden md:block" />
						<p className="text-xs md:text-sm font-bold text-center font-mono">
							{label}
						</p>
					</motion.div>
				))}
			</div>
		</div>
	);
};
