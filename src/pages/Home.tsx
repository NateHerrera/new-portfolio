import {
	FolderIcon,
	FolderOpenIcon,
	FolderSimpleStarIcon,
	FolderSimpleUserIcon,
	UserIcon,
} from "@phosphor-icons/react";

export const Home = () => {
	return (
		<div className="min-h-dvh bg-blue-200 flex flex-col">
			{/* Navbar */}
			<div></div>

			{/* Main Content */}
			<div className="flex-1 flex flex-col items-center justify-center gap-6">
				<div className="flex gap-4 items-center justify-center">
					<UserIcon size={96} />
					<div className="w-px h-16 bg-foreground opacity-30" />
					<h1 className="text-6xl font-bold tracking-tight">Nate Herrera</h1>
				</div>
				<p className="text-muted-foreground text-sm mt-2 text-center">
					Aspiring Software Engineer
				</p>
				<div className="flex gap-8 justify-center">
					<div>
						<FolderOpenIcon size={128} />
						<p className="text-sm font-bold text-center">Home!</p>
					</div>
					<div>
						<FolderSimpleStarIcon size={128} />
						<p className="text-sm font-bold text-center">Projects!</p>
					</div>
					<div>
						<FolderSimpleUserIcon size={128} />
						<p className="text-sm font-bold text-center">About Me!</p>
					</div>
					<div>
						<FolderIcon size={128} />
						<p className="text-sm font-bold text-center">Get in Touch!</p>
					</div>
				</div>
			</div>

			{/* Footer */}
			<div className="text-center text-sm p-4 text-muted-foreground">
				© 2026 Nathaniel Herrera. All rights reserved. <br></br>
				Made With React, TypeScript, Vite, Shadcn, and Vercel.
			</div>
		</div>
	);
};
