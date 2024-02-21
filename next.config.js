/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [{
      source: "/",
      destination: "/user",
      permanent: true,
    }];
  },
}

module.exports = nextConfig
