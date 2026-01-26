
# Pixel-Perfect Home Page Rebuild

## Overview
This plan will fix every component to exactly match your reference image. We will also build an overlay calibration tool so you can verify pixel-perfect alignment.

## Phase 1: Copy Your High-Res Reference Image for Overlay Tool

Save `user-uploads://playIQ_dream_site.png` to `src/assets/reference-overlay.png` for use in the calibration tool.

---

## Phase 2: Fix the PlayIQ Logo Display (Remove Dark Box)

**Problem**: The logo currently has a dark rectangular background.

**Solution in `Home.tsx`**:
- Remove ALL container divs around the logo image
- Set the image to display directly with transparent background
- Apply only drop-shadow glow effect, no background or border
- Ensure the PNG transparency is preserved

```text
Before:                              After:
+------------------+                 
|    [dark box]    |                 [logo floats freely]
|   PLAYIQ LOGO    |    -->           PLAYIQ LOGO
|    [dark box]    |                 [cyan glow around edges]
+------------------+                 
```

---

## Phase 3: Fix Navigation Bar

**Problem**: Current nav is a minimal flat bar without proper container.

**Solution in `HUDNav.tsx`**:
- Add rounded-pill container with border
- Apply cyan glow around the entire nav bar
- Keep items evenly spaced with proper padding
- Active state: bright cyan text + underline (keep current)
- Add subtle chamfered corner styling

```text
Reference nav bar structure:
+-------------------------------------------------------------------+
|  HOME    PLAYIQ AR    WORLDS    CHALLENGES    PROJECTS    BLOG   |
|  ____                                                              |
+-------------------------------------------------------------------+
  ^-- rounded pill with cyan border glow
```

---

## Phase 4: Fix Hologram Icons (Remove Square Boxes)

**Problem**: Icons have dark square glass boxes around them.

**Solution in `HoloIcon.tsx`**:
- Remove the glass-panel container entirely
- Display icon floating freely
- Add elliptical glow disk BELOW the icon (not around it)
- The glow disk should be the color of the icon (yellow, magenta, blue)
- Icon should have drop-shadow glow effect

```text
Reference icon structure:
     [icon]          
       |             
   =========    <-- elliptical glow disk (colored)
    "Label"
```

---

## Phase 5: Fix Progress Panel Styling

**Problem**: Panel is too plain, missing chamfered corner nodes.

**Solution in `HUDPanel.tsx`**:
- Add glowing corner node dots at each corner
- Ensure chamfered (clipped) corners with neon border
- Add subtle inner glow

---

## Phase 6: Fix Platform CTA Buttons

**Problem**: Buttons are basic rounded rectangles, missing platform effects.

**Solution in `PlatformButton.tsx`**:
- Add circular holographic platform base image/effect below button
- The platform should have concentric rings with glow
- Add fog/mist effect at bottom
- Button itself sits on top of the platform

---

## Phase 7: Create Dev Overlay Calibration Tool

**New file: `src/components/dev/DevOverlay.tsx`**

Features:
- Toggle with keyboard shortcut `Ctrl+Shift+O`
- Overlays your reference image at adjustable opacity
- Slider to control opacity (0-100%)
- Drag to reposition overlay
- Only visible in development mode

**Update `App.tsx`**:
- Import and render DevOverlay component
- Only render when `import.meta.env.DEV` is true

---

## Files to Modify

| File | Action | Changes |
|------|--------|---------|
| `src/assets/reference-overlay.png` | CREATE | Copy high-res reference |
| `src/pages/Home.tsx` | MODIFY | Remove dark box around logo, clean up layout |
| `src/components/hud/HUDNav.tsx` | MODIFY | Add pill container with border glow |
| `src/components/hud/HoloIcon.tsx` | MODIFY | Remove square box, add elliptical glow base |
| `src/components/hud/HUDPanel.tsx` | MODIFY | Add corner node glows |
| `src/components/hud/PlatformButton.tsx` | MODIFY | Add circular platform base with rings |
| `src/components/dev/DevOverlay.tsx` | CREATE | Overlay calibration tool |
| `src/App.tsx` | MODIFY | Add DevOverlay component |

---

## Requesting Additional Assets

If you have separate transparent PNG files for these elements from your original design, please upload them:

1. **Dragon egg** - the dark metallic version shown in reference
2. **Circular platform bases** - the holographic ring platforms under the CTAs
3. **Custom icons** - if you have the pyramid/tower/gem/shield as separate images

If you don't have these, I will recreate them using CSS/SVG effects to match as closely as possible.

---

## Verification Checklist

After implementation, use the overlay tool to verify:

- [ ] PlayIQ logo floats with NO dark box
- [ ] Navigation has rounded-pill container with cyan glow border
- [ ] Hologram icons have NO square boxes, only elliptical base glows
- [ ] Progress panel has glowing corner nodes
- [ ] Platform CTAs have circular holographic platform bases
- [ ] Overall layout proportions match reference
