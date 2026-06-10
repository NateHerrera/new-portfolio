import { motion } from "framer-motion";
import {
	EnvelopeSimpleIcon,
	LinkedinLogoIcon,
	GithubLogoIcon,
} from "@phosphor-icons/react";
import { useState } from "react";

const fadeUp = {
	initial: { opacity: 0, y: 20 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: { duration: 0.5 },
};

const socials = [
	{
		icon: GithubLogoIcon,
		label: "GitHub",
		href: "https://github.com/NateHerrera",
	},
	{
		icon: LinkedinLogoIcon,
		label: "LinkedIn",
		href: "https://linkedin.com/in/nathaniel-herrera",
	},
	{
		icon: EnvelopeSimpleIcon,
		label: "Email",
		href: "mailto:nateherrera731@email.com",
	},
];

export const ContactTab = () => {
	const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
		"idle",
	);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus("sending");

		const form = e.currentTarget;
		const data = new FormData(form);

		try {
			const res = await fetch("https://formspree.io/f/mrevlqln", {
				method: "POST",
				body: data,
				headers: { Accept: "application/json" },
			});

			if (res.ok) {
				setStatus("sent");
				form.reset();
			} else {
				setStatus("error");
			}
		} catch {
			setStatus("error");
		}
	};

	return (
		<div className="w-full max-w-xl mx-auto flex flex-col gap-8 md:gap-12 py-4 md:py-8">
			{/* Header */}
			<motion.div {...fadeUp} className="flex flex-col gap-2">
				<p className="text-xs text-muted-foreground font-mono">~/contact</p>
				<h2 className="text-xl md:text-2xl font-bold">{">"} get_in_touch</h2>
				<p className="text-xs md:text-sm text-muted-foreground">
					Have a question or want to work together? Send me a message.
				</p>
			</motion.div>

			{/* Form */}
			<motion.form
				{...fadeUp}
				onSubmit={handleSubmit}
				className="flex flex-col gap-4"
			>
				<div className="flex flex-col gap-1">
					<label className="text-xs font-mono text-muted-foreground">
						name_
					</label>
					<input
						type="text"
						name="name"
						required
						placeholder="John Doe"
						className="bg-transparent border-b-2 border-dashed border-muted-foreground/40 focus:border-foreground outline-none py-2 text-sm transition-colors"
					/>
				</div>

				<div className="flex flex-col gap-1">
					<label className="text-xs font-mono text-muted-foreground">
						email_
					</label>
					<input
						type="email"
						name="email"
						required
						placeholder="john@example.com"
						className="bg-transparent border-b-2 border-dashed border-muted-foreground/40 focus:border-foreground outline-none py-2 text-sm transition-colors"
					/>
				</div>

				<div className="flex flex-col gap-1">
					<label className="text-xs font-mono text-muted-foreground">
						message_
					</label>
					<textarea
						name="message"
						required
						rows={4}
						placeholder="Hey Nate..."
						className="bg-transparent border-b-2 border-dashed border-muted-foreground/40 focus:border-foreground outline-none py-2 text-sm transition-colors resize-none"
					/>
				</div>

				<button
					type="submit"
					disabled={status === "sending" || status === "sent"}
					className="self-start mt-2 px-6 py-2 border-2 border-foreground text-sm font-bold font-mono hover:bg-foreground hover:text-background transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{status === "idle" && "send_"}
					{status === "sending" && "sending_"}
					{status === "sent" && "sent ✓"}
					{status === "error" && "error — retry_"}
				</button>
			</motion.form>

			{/* Divider */}
			<div className="border-t border-dashed border-muted-foreground/30" />

			{/* Socials */}
			<motion.div {...fadeUp} className="flex flex-col gap-4">
				<p className="text-xs text-muted-foreground font-mono">
					── or find me at ──
				</p>
				<div className="flex gap-6 justify-center">
					{socials.map(({ icon: Icon, label, href }) => (
						<a
							key={label}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center gap-1 hover:scale-110 transition-transform"
						>
							<Icon size={32} />
							<p className="text-xs font-mono text-muted-foreground">{label}</p>
						</a>
					))}
				</div>
			</motion.div>
		</div>
	);
};
