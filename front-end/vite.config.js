import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url"; // ESM 환경에서 __dirname 대체
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 아래는 SCSS 옵션 설정
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // '@'를 'src' 디렉토리로 설정
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ``, // SCSS 전역 변수 등을 추가할 수 있음
      },
    },
  },
});
