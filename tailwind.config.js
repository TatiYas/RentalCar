/** @type {import('tailwindcss').Config} */
import path from 'path';

export default {
 content: [
 './app/**/*.{js,ts,jsx,tsx,mdx}',
 './pages/**/*.{js,ts,jsx,tsx,mdx}',
 './components/**/*.{js,ts,jsx,tsx,mdx}',
 './src/**/*.{js,ts,jsx,tsx,mdx}',
 path.join(path.resolve('./'), 'node_modules', '**/*.{js,ts,jsx,tsx,mdx}'),
 ],
 theme: {
 extend: {},
 },
 plugins: [],
};




