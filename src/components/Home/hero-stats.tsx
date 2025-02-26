"use client";

import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";
import { ThumbsUp, Eye, MessageSquare, Users } from "lucide-react";

const stats = [
    {
        icon: ThumbsUp,
        title: "Likes",
        value: "2,40,000+",
        description: "Still Counting",
    },
    {
        icon: Eye,
        title: "Views",
        value: "6.8 M+",
        description: "Still Counting",
    },
    {
        icon: MessageSquare,
        title: "Comments",
        value: "30,000+",
        description: "Still Counting",
    },
    {
        icon: Users,
        title: "Audience",
        value: "15,000+",
        description: "Still Counting",
    }
];

export function HeroStats() {
    return (
        <div className="flex justify-center mt-12 w-full gap-8 flex-wrap px-4 sm:px-6">
            {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                    <div key={index} className="relative overflow-hidden rounded-lg w-full sm:w-80 md:w-96">
                        <Spotlight>
                            <Card
                                className={cn(
                                    "relative p-6 border border-transparent w-full",
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
