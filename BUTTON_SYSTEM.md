# Button System Guide - Consistent Theme-Based UI

## Overview
Your application now uses a **semantic, consistent button system** with clear visual hierarchy and purpose.

## Button Categories

### 1. PRIMARY (.btn-primary) - Blue
**Purpose:** Main call-to-action (CTA) buttons
**Use cases:**
- Create New Invoice
- Add Client
- Add Contact
- Main submit actions

```tsx
<button className="btn btn-primary">➕ Create New Invoice</button>
```

---

### 2. SECONDARY (.btn-secondary) - Purple
**Purpose:** Alternative/secondary actions
**Use cases:**
- Company Settings
- Additional options
- Backup CTAs

```tsx
<button className="btn btn-secondary">⚙️ Company Settings</button>
```

---

### 3. TERTIARY (.btn-edit) - Cyan/Teal
**Purpose:** Minor edit/view actions
**Use cases:**
- Edit existing items
- View details
- Modify entries

```tsx
<button className="btn btn-edit btn-small">✏️ Edit</button>
```

---

### 4. SUCCESS (.btn-save) - Green
**Purpose:** Positive/confirmatory actions
**Use cases:**
- Save changes
- Submit forms
- Confirm actions

```tsx
<button className="btn btn-save">💾 Save</button>
```

---

### 5. DANGER (.btn-danger) - Red
**Purpose:** Destructive actions (delete, remove)
**Use cases:**
- Delete invoice
- Remove line item
- Clear data

```tsx
<button className="btn btn-danger btn-small">🗑️ Delete</button>
```

---

### 6. PRINT (.btn-print) - Purple
**Purpose:** Print operations
**Use cases:**
- Print invoice
- Export document

```tsx
<button className="btn btn-print btn-small">🖨️ Print</button>
```

---

### 7. ADD ITEM (.btn-add-item) - Purple
**Purpose:** Add minor items (line items, rows)
**Use cases:**
- Add line item to invoice
- Add row to table

```tsx
<button className="btn btn-add-item">➕ Add Line Item</button>
```

---

### 8. BACK (.btn-back) - White Outline
**Purpose:** Navigation and cancellation
**Use cases:**
- Go back
- Cancel operation
- Exit dialog

```tsx
<button className="btn btn-back">← Back</button>
```

---

### 9. GHOST (.btn-ghost) - Blue Outline
**Purpose:** Optional/auxiliary actions
**Use cases:**
- Learn more
- View all
- View report

```tsx
<button className="btn btn-ghost btn-small">View Report</button>
```

---

## Size Modifiers

### Default Size
```tsx
<button className="btn btn-primary">Default (12px 24px)</button>
```

### Small Size
```tsx
<button className="btn btn-edit btn-small">Small (8px 16px)</button>
```

### Large Size
```tsx
<button className="btn btn-primary btn-large">Large (14px 32px)</button>
```

---

## Visual Hierarchy

```
┌─────────────────────────────────────┐
│  PRIMARY (Blue)                     │  Most important CTA
│  ➕ Create New Invoice              │
└─────────────────────────────────────┘

┌─────────────────┐  ┌──────────────────┐
│ SECONDARY       │  │ SAVE             │  Secondary level
│ ⚙️ Settings      │  │ 💾 Save Changes  │
└─────────────────┘  └──────────────────┘

┌────────────┐  ┌─────────────┐  ┌──────────────┐
│ EDIT       │  │ PRINT       │  │ ADD ITEM     │  Minor actions
│ ✏️ Edit     │  │ 🖨️ Print    │  │ ➕ Add Item   │
└────────────┘  └─────────────┘  └──────────────┘

┌────────────┐  ┌──────────────┐
│ BACK       │  │ DANGER       │  Navigation & Destructive
│ ← Back     │  │ 🗑️ Delete    │
└────────────┘  └──────────────┘
```

---

## Current Implementation

### Components Using This System:

#### Dashboard.tsx
- `btn-primary` → "Create New Invoice" ✅
- `btn-secondary` → "Company Settings" ✅

#### InvoiceCard.tsx
- `btn-edit btn-small` → "Edit" ✅
- `btn-print btn-small` → "Print" ✅

#### InvoiceEditor.tsx
- `btn-back` → "Back" ✅
- `btn-save` → "Save" ✅
- `btn-print` → "Print" ✅
- `btn-add-item` → "Add Line Item" ✅

#### LineItemsTable.tsx
- `btn-danger btn-small` → "Delete" ✅

---

## Color Palette Reference

```css
PRIMARY    → #2563eb (Blue)
SECONDARY  → #8b5cf6 (Purple)
TERTIARY   → #06b6d4 (Cyan)
SUCCESS    → #10b981 (Green)
DANGER     → #ef4444 (Red)
BACK       → #ffffff (White outline)
GHOST      → Transparent with blue border
```

---

## Best Practices

✅ **DO:**
- Use `.btn-primary` for main CTAs only
- Combine size modifiers: `.btn btn-primary btn-small`
- Use semantic button types for clarity
- Maintain consistent spacing and gaps

❌ **DON'T:**
- Mix button colors without semantic meaning
- Use multiple `.btn-primary` buttons on same page (max 1-2)
- Override button styles with inline CSS
- Create new button variants without updating this guide

---

## CSS Structure in App.css

All button styles are organized in a single, comprehensive section:
- Lines 260-400: Button system documentation & base styles
- All button classes follow the same hover/active pattern
- Consistent transitions and shadows
- Supports all size modifiers

---

**Last Updated:** March 12, 2026  
**Status:** ✅ Refactored & Consistent
