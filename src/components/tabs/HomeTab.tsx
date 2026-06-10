import {
	FolderIcon,
	FolderOpenIcon,
	FolderSimpleStarIcon,
	FolderSimpleUserIcon,
	UserIcon,
} from "@phosphor-icons/react";

export const HomeTab = ({
	openFolder,
}: {
	openFolder: (key: string) => void;
}) => {
	return (
		<>
			{/* Name row */}
			<div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center justify-center">
				<UserIcon size={64} className="md:hidden" />
				<UserIcon size={96} className="hidden md:block" />
				<div className="hidden md:block w-px h-16 bg-foreground opacity-30" />
				<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center">
					Nate Herrera
				</h1>
			</div>
			<p className="text-muted-foreground text-xs md:text-sm text-center">
				Aspiring Software Engineer
			</p>
			{/* Folders */}
			<div className="flex flex-wrap gap-4 md:gap-8 justify-center">
				<div
					onClick={() => openFolder("home")}
					className="flex flex-col items-center cursor-pointer"
				>
					<FolderOpenIcon size={64} className="md:hidden" />
					<FolderOpenIcon size={128} className="hidden md:block" />
					<p className="text-xs md:text-sm font-bold text-center">Home!</p>
				</div>
				<div
					onClick={() => openFolder("projects")}
					className="flex flex-col items-center cursor-pointer"
				>
					<FolderSimpleStarIcon size={64} className="md:hidden" />
					<FolderSimpleStarIcon size={128} className="hidden md:block" />
					<p className="text-xs md:text-sm font-bold text-center">Projects!</p>
				</div>
				<div
					onClick={() => openFolder("about")}
					className="flex flex-col items-center cursor-pointer"
				>
					<FolderSimpleUserIcon size={64} className="md:hidden" />
					<FolderSimpleUserIcon size={128} className="hidden md:block" />
					<p className="text-xs md:text-sm font-bold text-center">About Me!</p>
				</div>
				<div
					onClick={() => openFolder("contact")}
					className="flex flex-col items-center cursor-pointer"
				>
					<FolderIcon size={64} className="md:hidden" />
					<FolderIcon size={128} className="hidden md:block" />
					<p className="text-xs md:text-sm font-bold text-center">
						Get in Touch!
					</p>
				</div>
			</div>{" "}
			{/* ← this was missing */}
		</>
	);
};
