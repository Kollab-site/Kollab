"use client";

import { Container } from "../../components/ui/Container";
import { Card } from "../../components/ui/Card";
import { Grid } from "../../components/ui/Grid";
import { SectionHeader } from "../../components/ui/SectionHeader";

interface ValueCardProps {
  title: string;
  description: string;
}

function ValueCard({ title, description }: ValueCardProps) {
  return (
    <Card>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
}

export function ValuesSection() {
  const values = [
    {
      title: "Transparency",
      description:
        "We believe in open and honest communication between brands and influencers, ensuring clear expectations and fair partnerships.",
    },
    {
      title: "Innovation",
      description:
        "We continuously push the boundaries of what's possible in influencer marketing through cutting-edge technology and creative solutions.",
    },
    {
      title: "Community",
      description:
        "We foster a supportive community where brands and influencers can grow together, sharing knowledge and building lasting relationships.",
    },
  ];

  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          title="Our Values"
          subtitle="These core values guide everything we do at Reachly"
        />
        <Grid cols={3} gap="lg">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              title={value.title}
              description={value.description}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}
