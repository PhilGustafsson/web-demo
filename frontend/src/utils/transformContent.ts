export const transformContent = (contentBlocks: any[]): string => {
  return contentBlocks
    .map(block => block.children.map((child: any) => child.text).join(""))
    .join("\n\n");
};