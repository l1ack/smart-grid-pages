/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/docs',
};

export default nextConfig;
// module.exports = {
//     webpack: (config, { isServer }) => {
//         // 只在服务器端运行时，才使用 CommonJS 模块系统
//         if (isServer) {
//             config.resolve.mainFields = ['main', 'module'];
//         }
//         return config;
//     },
// };
