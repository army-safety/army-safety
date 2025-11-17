// src/removeAds.ts
const adSizes = [
  { w: 728, h: 90 },
  { w: 300, h: 250 },
  { w: 336, h: 280 },
  { w: 300, h: 600 },
  { w: 320, h: 50 }
];

type AdSize = { w: number; h: number };

function isAd(img: HTMLImageElement): boolean {
  return adSizes.some((size: AdSize) => img.naturalWidth === size.w && img.naturalHeight === size.h);
}

function checkImages(): void {
  document.querySelectorAll<HTMLImageElement>('img').forEach(img => {
    if (img.complete) {
      if (isAd(img)) img.remove();
    } else {
      img.onload = () => isAd(img) && img.remove();
    }
  });
}

export default function removeAds(): void {
  new MutationObserver(checkImages).observe(document.body, { childList: true, subtree: true });
  checkImages();
}
