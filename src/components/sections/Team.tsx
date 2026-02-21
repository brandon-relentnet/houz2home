import { UserCircleIcon } from "@heroicons/react/24/outline";

interface TeamMember {
	name: string;
	role: string;
	quote: string;
}

const teamMembers: TeamMember[] = [
	{
		name: "Brent Harris",
		role: "Co-Founder & Project Manager",
		quote: "\u201CEvery detail deserves attention.\u201D",
	},
	{
		name: "Trish Harris",
		role: "Co-Founder & Lead Designer",
		quote: "\u201CInnovative solutions for every space.\u201D",
	},
];

export default function Team() {
	return (
		<section className="py-12 px-4 md:px-8 lg:px-16 mb-12 lg:mb-28">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-center">Meet the Team</h2>
				<p className="text-center max-w-xl mx-auto mb-8">
					See the people behind the magic.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
					{teamMembers.map((member) => (
						<div
							key={member.name}
							className="bg-surface0 rounded-lg shadow p-6 text-center hover:shadow-lg border-transparent hover:border-accent border-2 transition duration-300"
						>
							<div className="mb-3">
								<UserCircleIcon className="h-14 w-14 text-accent mx-auto" />
							</div>
							<h4>{member.name}</h4>
							<p className="mt-1">{member.role}</p>
							<p className="italic mt-2">{member.quote}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
