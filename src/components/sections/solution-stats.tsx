"use client";

import { motion } from "framer-motion";
import { StatBlock } from "@/components/ui/stat-block";
import { Clock, DollarSign, Users } from "lucide-react";

export function SolutionStats() {
  return (
    <div className="w-full py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <StatBlock
            value={97}
            startValue={0}
            delay={0.5}
            suffix="%"
            label="Time saved on trip planning"
            icon={<Clock className="h-6 w-6" />}
          />
        </motion.div>
        
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <StatBlock
            value={100}
            startValue={0}
            delay={0.65}
            suffix="+"
            label="Happy travelers and counting"
            icon={<Users className="h-6 w-6" />}
          />
        </motion.div> */}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <StatBlock
            value={12}
            startValue={0}
            delay={0.8}
            suffix="%"
            label="Average savings per trip"
            icon={<DollarSign className="h-6 w-6" />}
          />
        </motion.div>
      </div>
    </div>
  );
} 