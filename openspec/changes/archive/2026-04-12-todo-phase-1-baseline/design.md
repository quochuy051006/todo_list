# Design: Todo Phase 1 - The Baseline

## Architecture
A single-page web environment using pure HTML and CSS.

## UI Structure
The main content should be horizontally centered and take up the majority of the available browser width (up to 1200px) for a "Full-Width" dashboard feel.

### Component Map
1. **Title**: "My Modern Todo"
2. **Task List**:
   - `<ul>` element.
   - 3 `<li>` elements containing text "Buy milk", "Learn SDD", and "Practice HTML".

## Styling Guidelines
- **Container**: Padding: 40px, Shadow: Light gray, Border-radius: 12px, Width: 90%.
- **Typography**: Sans-serif, Clean, Vertical spacing between items: 10px.
- **Layout**: Simple vertical stack for the title and list.

## Data Structure (Future-proofing)
Although static, we will design for a future `Todo` object:
```typescript
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
```
In this phase, these will be hardcoded as HTML attributes or simple text content.
