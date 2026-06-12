/**
 * Build-time helper: splits a raw .astro file string into its three logical sections.
 * Each component is expected to have exactly one <script> and one <style> block.
 *
 * Returns:
 *   markup  – template HTML (no frontmatter, no <script>, no <style> tags)
 *   script  – JS inside <script>...</script> (tags stripped)
 *   style   – CSS inside <style>...</style> (tags stripped)
 */
export interface CraftSourceSections {
  markup: string;
  script: string;
  style: string;
}

export function splitCraftSource(raw: string): CraftSourceSections {
  // 1. Strip the frontmatter block (--- ... ---) from the top.
  let text = raw.replace(/^---[\s\S]*?---\n?/, '');

  // 2. Extract <script>...</script> (top-level, non-greedy).
  let script = '';
  text = text.replace(/<script>([\s\S]*?)<\/script>/, (_match, inner) => {
    script = inner.trim();
    return '';
  });

  // 3. Extract <style>...</style> (top-level, non-greedy).
  let style = '';
  text = text.replace(/<style>([\s\S]*?)<\/style>/, (_match, inner) => {
    style = inner.trim();
    return '';
  });

  // 4. The remainder is markup.
  const markup = text.trim();

  return { markup, script, style };
}
