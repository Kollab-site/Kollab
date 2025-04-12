"use client";

import { motion } from "framer-motion";
import { Container } from "../../components/ui/Container";
import { Card } from "../../components/ui/Card";
import { Grid } from "../../components/ui/Grid";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { Avatar } from "../../components/ui/Avatar";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

function TeamMember({ name, role, image, description }: TeamMemberProps) {
  return (
    <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.2 }}>
      <Card>
        <div className="flex flex-col items-center text-center">
          <Avatar src={image} alt={name} size="lg" className="mb-4" />
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-gray-600 mb-4">{role}</p>
          <p className="text-gray-600">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}

export function TeamSection() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "/team/john-doe.jpg",
      description: "Passionate about connecting brands with authentic voices.",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "/team/jane-smith.jpg",
      description:
        "Tech enthusiast building the future of influencer marketing.",
    },
    {
      name: "Mike Johnson",
      role: "Head of Partnerships",
      image: "/team/mike-johnson.jpg",
      description: "Building strong relationships between brands and creators.",
    },
  ];

  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          title="Our Team"
          subtitle="Meet the people behind Reachly"
        />
        <Grid cols={3} gap="lg">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              description={member.description}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}
