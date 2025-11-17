const adSizes = [
  { w: 728, h: 90 },
  { w: 300, h: 250 },
  { w: 336, h: 280 },
  { w: 300, h: 600 },
  { w: 320, h: 50 }
];

function removeAds() {
  const isAd = img =>
    adSizes.some(size => img.naturalWidth === size.w && img.naturalHeight === size.h);

  const checkImages = () => {
    document.querySelectorAll('img').forEach(img => {
      if (img.complete) {
        if (isAd(img)) img.remove();
      } else {
        img.onload = () => isAd(img) && img.remove();
      }
    });
  };

  new MutationObserver(checkImages).observe(document.body, { childList: true, subtree: true });
  checkImages();
}

export default removeAds;
