/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lesscss.org",
        port: "",
        pathname: "/public/img/less_logo.png",
      },
      {
        protocol: "https",
        hostname: "gsap.com",
        port: "",
        pathname:
          "/community/uploads/monthly_2020_03/tweenmax.png.cf27916e926fbb328ff214f66b4c8429.png",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "static.gunnarpeipman.com",
      },
      {
        protocol: "https",
        hostname: "getcomposer.org",
      },
    ],
  },
};

export default nextConfig;
