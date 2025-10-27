import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@azodik/ui";
import { LeftLongArrowIcon, RightLongArrowIcon } from "@azodik/icons";
import { componentsMenuItems } from "@/data/componentsMenu";
import { useLanguageTranslation } from "@/hooks/useLanguageTranslation";

export default function ComponentNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguageTranslation();

  // Get current component index and navigation info
  const getNavigationInfo = () => {
    const currentPath = location.pathname;

    const currentIndex = componentsMenuItems.findIndex((item) => item.href === currentPath);

    if (currentIndex === -1) return { previous: null, next: null };

    const previous = currentIndex > 0 ? componentsMenuItems[currentIndex - 1] : null;
    const next =
      currentIndex < componentsMenuItems.length - 1 ? componentsMenuItems[currentIndex + 1] : null;

    return { previous, next };
  };

  const { previous, next } = getNavigationInfo();

  const handlePrevious = () => {
    if (previous) {
      navigate(previous.href);
    }
  };

  const handleNext = () => {
    if (next) {
      navigate(next.href);
    }
  };

  return (
    <div className="flex justify-between items-center" style={{ marginTop: "var(--space-lg)" }}>
      {/* Previous Button */}
      <Button
        onClick={handlePrevious}
        disabled={!previous}
        variant="primary"
        size="md"
        className="flex items-center gap-2"
      >
        <LeftLongArrowIcon size={16} color="currentColor" />
        <span className="font-medium">{previous ? t(previous.nameKey) : t('previous')}</span>
      </Button>

      {/* Next Button */}
      <Button
        onClick={handleNext}
        disabled={!next}
        variant="primary"
        size="md"
        className="flex items-center gap-2"
      >
        <span className="font-medium">{next ? t(next.nameKey) : t('next')}</span>
        <RightLongArrowIcon size={16} color="currentColor" />
      </Button>
    </div>
  );
}
