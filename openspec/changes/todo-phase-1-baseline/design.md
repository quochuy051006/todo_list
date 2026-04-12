# Design: Todo Phase 1 - The Baseline

## Architecture
A single-page application using pure HTML and CSS.

## UI Structure
The main container should be centered in the viewport with a max-width of 400px.

### Component Map
1. **Header**: "My Modern Todo"
2. **Task List**:
   - `<ul>` element.
   - 3 `<li>` elements containing text "Buy milk", "Learn SDD", and "Practice HTML".

## Styling Guidelines
- **Container**: Padding: 20px, Shadow: Light gray, Border-radius: 10px.
- **Typography**: Sans-serif, Clean, Vertical spacing between items: 10px.
- **Layout**: Simple vertical stack for the header and list.

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
