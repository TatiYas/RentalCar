/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
 './app/**/*.{js,ts,jsx,tsx,mdx}',
 './pages/**/*.{js,ts,jsx,tsx,mdx}',
 './components/**/*.{js,ts,jsx,tsx,mdx}',
 './src/**/*.{js,ts,jsx,tsx,mdx}',
 path.join(path.resolve(__dirname, './'), 'node_modules/.pnpm', '**/node_modules', '**/*.{js,ts,jsx,tsx,mdx}'),
 ],
 theme: {
 extend: {},
 },
 plugins: [],
}




