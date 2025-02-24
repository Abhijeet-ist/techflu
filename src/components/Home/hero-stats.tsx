"use client";

import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";
import { Activity, MessageSquare, Users } from "lucide-react";
const stats = [
    {
        icon: Users,
        title: "Event Attendees",
        value: "1500+",
        description: "People joined our events",
    },
    {
        icon: MessageSquare,
        title: "Feedback Received",
        value: "200+",
        description: "Valuable insights from attendees",
    },
    {
        icon: Activity,
        title: "Events Organized",
        value: "30+",
        description: "Successful tech events",
    },
    {
        icon: Users,
        title: "Speakers",
        value: "16",
        description: "Events Speakers",
    },
];

export function HeroStats() {
    return (
        <div className="flex justify-center mt-12 w-full gap-8 flex-wrap">
            {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                    <div key={index} className="relative overflow-hidden rounded-lg">
                        <Spotlight>
                            <Card
                                className={cn(
                                    "relative p-6 border border-transparent w-96", // Changed w-80 to w-96 for more width
                                    "bg-background/95 backdrop-blur-xl transition-all duration-300",
                                    "before:absolute before:inset-0 before:rounded-lg before:border-[3px] before:border-orange-500 before:animate-pulse",
                                    "shadow-lg hover:shadow-orange-500/50"
                                )}
                            >
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="p-3 rounded-lg">
                                            <Icon className="w-7 h-7 text-orange-500" />
                                        </div>
                                        <p className="text-sm text-orange-600 font-medium">
                                            {stat.title}
                                        </p>
                                    </div>
                                    <p className="text-4xl font-bold text-orange-600 mb-1">{stat.value}</p>
                                    <p className="text-sm text-orange-500">{stat.description}</p>
                                </div>
                            </Card>
                        </Spotlight>
                    </div>
                );
            })}
        </div>
    );
}
