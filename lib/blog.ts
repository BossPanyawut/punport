import type { Post } from "@/lib/types";

// Mock blog posts data
const posts: Post[] = [
  {
    slug: "building-accessible-react-applications",
    title: "Building Accessible React Applications",
    date: "2023-10-15",
    excerpt:
      "Learn how to create React applications that are accessible to all users, including those with disabilities.",
    content: `
# Building Accessible React Applications

Accessibility is a crucial aspect of web development that ensures your applications can be used by everyone, including people with disabilities. In this post, we'll explore how to build accessible React applications.

## Why Accessibility Matters

Web accessibility is not just a nice-to-have feature; it's a necessity. Here's why:

- **Inclusivity**: Making your application accessible ensures that all users, regardless of their abilities, can use your product.
- **Legal Requirements**: Many countries have laws requiring digital accessibility.
- **SEO Benefits**: Many accessibility practices also improve your site's SEO.
- **Better UX for Everyone**: Accessibility improvements often make the user experience better for all users.

## Key Accessibility Considerations in React

### 1. Semantic HTML

Using the right HTML elements for the right purpose is the foundation of accessibility:

\`\`\`jsx
// Bad
<div onClick={handleClick}>Click me</div>

// Good
<button onClick={handleClick}>Click me</button>
\`\`\`

### 2. Keyboard Navigation

Ensure all interactive elements can be accessed and operated using only a keyboard:

\`\`\`jsx
function AccessibleButton() {
  return (
    <button 
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          // Handle activation
        }
      }}
    >
      Press Enter or Space
    </button>
  );
}
\`\`\`

### 3. ARIA Attributes

ARIA (Accessible Rich Internet Applications) attributes help screen readers understand your UI:

\`\`\`jsx
function ExpandableSection({ expanded, children }) {
  return (
    <div 
      aria-expanded={expanded}
      aria-controls="content-id"
    >
      {children}
    </div>
  );
}
\`\`\`

### 4. Focus Management

Proper focus management is essential for keyboard users:

\`\`\`jsx
function Modal({ isOpen, onClose }) {
  const modalRef = useRef(null);
  
  useEffect(() => {
    if (isOpen) {
      modalRef.current.focus();
    }
  }, [isOpen]);
  
  return isOpen ? (
    <div 
      ref={modalRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
    >
      <button onClick={onClose}>Close</button>
      {/* Modal content */}
    </div>
  ) : null;
}
\`\`\`

## Testing Accessibility

To ensure your React application is accessible, use tools like:

- **React Testing Library**: Encourages accessible testing practices
- **jest-axe**: For automated accessibility testing
- **Lighthouse**: For overall accessibility audits
- **Screen readers**: NVDA, VoiceOver, or JAWS for manual testing

## Conclusion

Building accessible React applications is not just about compliance; it's about creating better experiences for all users. By incorporating these practices into your development workflow, you'll create more inclusive and user-friendly applications.

Remember, accessibility is not a one-time task but an ongoing commitment to inclusive design and development.
    `,
    coverImage: "/placeholder.svg?height=300&width=600",
    readingTime: 5,
  },
  {
    slug: "nextjs-14-whats-new-and-improved",
    title: "Next.js 14: What's New and Improved",
    excerpt:
      "Explore the latest features and improvements in Next.js 14 and how they can enhance your development workflow.",
    date: "2023-09-28",
    content: `
# Next.js 14: What's New and Improved

Next.js 14 brings several exciting features and improvements that enhance the developer experience and application performance. Let's dive into what's new and how you can leverage these changes.

## Server Actions: Now Stable

Server Actions, previously in beta, are now stable in Next.js 14. This feature allows you to define asynchronous functions that execute on the server, making it easier to build forms and mutations:

\`\`\`jsx
// app/actions.js
'use server';

export async function submitForm(formData) {
  const name = formData.get('name');
  // Process form data on the server
  return { success: true };
}

// app/page.js
import { submitForm } from './actions';

export default function Page() {
  return (
    <form action={submitForm}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`

## Partial Prerendering (Preview)

Next.js 14 introduces Partial Prerendering, a new rendering strategy that combines static and dynamic content:

\`\`\`jsx
export default async function Page() {
  return (
    <div>
      <h1>Static Content</h1>
      <Suspense fallback={<Loading />}>
        <DynamicContent />
      </Suspense>
    </div>
  );
}

async function DynamicContent() {
  const data = await fetchData(); // This part is dynamic
  return <div>{data}</div>;
}
\`\`\`

## Improved Metadata API

The Metadata API has been enhanced with new features:

\`\`\`jsx
export const metadata = {
  title: 'My Page',
  description: 'Page description',
  metadataBase: new URL('https://example.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
};
\`\`\`

## Turbopack Improvements

Turbopack, Next.js's Rust-based bundler, has seen significant performance improvements:

- 53% faster local server startup
- 94% faster Fast Refresh
- 20% faster cold builds

## Next.js Learn Updates

The Next.js Learn platform has been completely revamped with new courses covering:

- App Router fundamentals
- CSS styling approaches
- Fetching and streaming
- Error handling
- Mutations with Server Actions
- Authentication

## Migration to Next.js 14

Upgrading to Next.js 14 is straightforward for most applications:

\`\`\`bash
npm install next@latest react@latest react-dom@latest
\`\`\`

## Conclusion

Next.js 14 brings significant improvements to performance, developer experience, and rendering capabilities. The stable Server Actions, Partial Prerendering preview, and enhanced Metadata API provide powerful tools for building modern web applications.

Whether you're building a new project or maintaining an existing one, Next.js 14's improvements make it an excellent choice for your frontend framework.
    `,
    coverImage: "/placeholder.svg?height=300&width=600",
    readingTime: 4,
  },
  {
    slug: "optimizing-performance-in-react-applications",
    title: "Optimizing Performance in React Applications",
    excerpt:
      "Discover techniques and best practices for optimizing the performance of your React applications.",
    date: "2023-09-10",
    content: `
# Optimizing Performance in React Applications

Performance optimization is crucial for providing a smooth user experience in React applications. In this post, we'll explore various techniques to improve your React app's performance.

## Identifying Performance Issues

Before optimizing, identify where the performance bottlenecks are:

- Use React DevTools Profiler to record and analyze component renders
- Use Lighthouse for overall performance metrics
- Monitor console warnings about potential performance issues

## Key Optimization Techniques

### 1. Memoization with React.memo, useMemo, and useCallback

Prevent unnecessary re-renders with memoization:

\`\`\`jsx
// Memoize a component
const MemoizedComponent = React.memo(function MyComponent(props) {
  // Only re-renders if props change
  return <div>{props.value}</div>;
});

function ParentComponent() {
  // Memoize a value
  const expensiveValue = useMemo(() => {
    return computeExpensiveValue(a, b);
  }, [a, b]);
  
  // Memoize a callback
  const handleClick = useCallback(() => {
    doSomething(a, b);
  }, [a, b]);
  
  return (
    <MemoizedComponent value={expensiveValue} onClick={handleClick} />
  );
}
\`\`\`

### 2. Code Splitting with React.lazy and Suspense

Split your code into smaller chunks that load on demand:

\`\`\`jsx
import React, { Suspense, lazy } from 'react';

// Lazy load the component
const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
\`\`\`

### 3. Virtualization for Long Lists

Render only visible items in long lists:

\`\`\`jsx
import { useVirtualizer } from '@tanstack/react-virtual';

function VirtualList({ items }) {
  const parentRef = React.useRef();
  
  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
  });
  
  return (
    <div ref={parentRef} style={{ height: '500px', overflow: 'auto' }}>
      <div
        style={{
          height: \`\${virtualizer.getTotalSize()}px\`,
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: \`\${virtualItem.size}px\`,
              transform: \`translateY(\${virtualItem.start}px)\`,
            }}
          >
            {items[virtualItem.index]}
          </div>
        ))}
      </div>
    </div>
  );
}
\`\`\`

### 4. Optimizing Context API Usage

Avoid unnecessary re-renders with Context by splitting contexts or using memoization:

\`\`\`jsx
// Split contexts by concern
const UserContext = React.createContext();
const ThemeContext = React.createContext();

// Use memoization with context
function MyComponent() {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  
  // Only re-render when user changes
  const userDisplay = useMemo(() => (
    <div>{user.name}</div>
  ), [user]);
  
  return (
    <div style={{ background: theme.background }}>
      {userDisplay}
    </div>
  );
}
\`\`\`

### 5. Using Production Builds

Always use production builds for deployment:

\`\`\`bash
# For Create React App
npm run build

# For Next.js
npm run build
npm run start
\`\`\`

## Advanced Techniques

### Web Workers for CPU-Intensive Tasks

Offload heavy computations to web workers:

\`\`\`jsx
// worker.js
self.addEventListener('message', (e) => {
  const result = heavyComputation(e.data);
  self.postMessage(result);
});

// Component
function HeavyComponent() {
  const [result, setResult] = useState(null);
  
  useEffect(() => {
    const worker = new Worker('./worker.js');
    worker.postMessage(data);
    worker.onmessage = (e) => {
      setResult(e.data);
      worker.terminate();
    };
    
    return () => worker.terminate();
  }, [data]);
  
  return <div>{result}</div>;
}
\`\`\`

### Optimizing Images and Assets

Use modern image formats and lazy loading:

\`\`\`jsx
// In Next.js
import Image from 'next/image';

function MyImage() {
  return (
    <Image
      src="/my-image.webp"
      width={500}
      height={300}
      loading="lazy"
      alt="Description"
    />
  );
}
\`\`\`

## Conclusion

Performance optimization in React is an ongoing process. Start with the techniques that address your specific bottlenecks, measure the impact, and iterate. Remember that premature optimization can lead to unnecessary complexity, so always profile first to identify real issues.

By implementing these strategies, you can significantly improve your React application's performance, providing a better experience for your users.
    `,
    coverImage: "/placeholder.svg?height=300&width=600",
    readingTime: 6,
  },
];

/**
 * Get all blog posts
 */
export async function getAllPosts(): Promise<Post[]> {
  // In a real application, this would fetch from a CMS or database
  return posts;
}

/**
 * Get a specific blog post by slug
 */
export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  // In a real application, this would fetch from a CMS or database
  return posts.find((post) => post.slug === slug);
}
