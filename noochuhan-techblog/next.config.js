/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, { isServer }) {
        // Markdown 파일을 위한 설정
        config.module.rules.push({
            test: /\.md$/,
            type: "asset/source",
        });
        config.resolve.fallback = { fs: false };
        return config;
    },
};

module.exports = nextConfig;
