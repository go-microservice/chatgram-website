/**
 * 是否是在浏览器端运行
 */
export const isClient = () => typeof window !== 'undefined';

// 是否是移动端
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

// sleep(5000), 5s
export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));