'use client';

import { motion } from 'motion/react';
import { ImageIcon, TagIcon } from './ui/icons';

interface ManageTabsProps {
  activeTab: 'images' | 'tags';
  onTabChange: (tab: 'images' | 'tags') => void;
}

export default function ManageTabs({ activeTab, onTabChange }: ManageTabsProps) {
  const tabs = [
    { id: 'images' as const, label: '图片管理', Icon: ImageIcon },
    { id: 'tags' as const, label: '标签管理', Icon: TagIcon },
  ];

  return (
    <div className="flex space-x-2 mb-8 bg-white dark:bg-slate-800 rounded-xl p-1.5 shadow-md border border-gray-100 dark:border-gray-700">
      {tabs.map((tab) => {
        const { Icon } = tab;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
              isActive
                ? 'text-white'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-linear-to-r from-indigo-500 to-purple-600 rounded-lg"
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              />
            )}
            <span className="relative flex items-center space-x-2">
              <Icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
