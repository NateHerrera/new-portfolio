import { useState } from "react";
import { HomeTab } from "../components/tabs/HomeTab";
import { ProjectsTab } from "../components/tabs/ProjectsTab";
import { AboutTab } from "../components/tabs/AboutTab";
import { ContactTab } from "../components/tabs/ContactTab";

const tabs = {
	home: {
		label: "Home!",
		color: "from-amber-100 to-amber-150",
		border: "border-amber-400",
	},
	projects: {
		label: "Projects!",
		color: "from-blue-100 to-blue-150",
		border: "border-blue-400",
	},
	about: {
		label: "About Me!",
		color: "from-green-100 to-green-150",
		border: "border-green-400",
	},
	contact: {
		label: "Get in Touch!",
		color: "from-purple-100 to-purple-150",
		border: "border-purple-400",
	},
};

export const Home = () => {
	const [openTabs, setOpenTabs] = useState<string[]>(["home"]);
	const [activeTab, setActiveTab] = useState<string>("home");

	const openFolder = (tabKey: string) => {
		if (!openTabs.includes(tabKey)) {
			setOpenTabs([...openTabs, tabKey]);
		}
		setActiveTab(tabKey);
	};

	const renderTab = () => {
		switch (activeTab) {
			case "home":
				return <HomeTab openFolder={openFolder} />;
			case "projects":
				return <ProjectsTab />;
			case "about":
				return <AboutTab />;
			case "contact":
				return <ContactTab />;
		}
	};

	return (
		<div
			className="h-dvh flex flex-col"
			style={{
				backgroundColor: "#ffffff",
				backgroundImage:
					"radial-gradient(circle, #00000015 2px, transparent 1px)",
				backgroundSize: "24px 24px",
			}}
		>
			{/* Tabs row */}
			<div className="flex overflow-x-auto">
				{openTabs.map((tabKey) => (
					<div
						key={tabKey}
						onClick={() => setActiveTab(tabKey)}
						className={`flex-1 min-w-max px-3 md:px-6 py-2 md:py-3 rounded-tl-lg rounded-tr-lg text-xs md:text-sm font-bold border-4 cursor-pointer text-center
							${tabs[tabKey as keyof typeof tabs].color}
							${tabs[tabKey as keyof typeof tabs].border}
							border-b-0`}
					>
						{tabs[tabKey as keyof typeof tabs].label}
					</div>
				))}
			</div>

			{/* Folder body */}
			<div
				className={`flex-1 rounded-tr-lg rounded-br-lg rounded-bl-lg border-4 overflow-hidden flex flex-col shadow-2xl
					${tabs[activeTab as keyof typeof tabs].color}
					${tabs[activeTab as keyof typeof tabs].border}`}
			>
				{/* Scrollable content */}
				<div className="flex-1 overflow-y-auto flex flex-col items-center justify-start gap-4 md:gap-6 p-4 md:p-8">
					{renderTab()}
				</div>

				{/* Footer */}
				<div className="text-center text-xs md:text-sm p-3 md:p-4 text-muted-foreground border-t">
					© 2026 Nathaniel Herrera. All rights reserved.{" "}
					<span className="hidden md:inline">
						<br />
						Made With React, TypeScript, Vite, Shadcn, and Vercel.
					</span>
				</div>
			</div>
		</div>
	);
};
