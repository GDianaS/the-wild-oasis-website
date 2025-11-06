/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yuzlhibqukoniruxtiyl.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/cabin-images/**',
      },
    ],
  },
// Export as a Static Site Generation => arquivo out que vai para um renderizador
// Para isso, as páginas deverão ser todas estáticas
// npm run build
//  output:"export"
};

export default nextConfig;
