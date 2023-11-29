import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text } from "react-native";

interface ContentProps {
  contentId: string;
}

const Content: React.FC<ContentProps> = ({ contentId }) => {
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(
          `https://h7d9sv70kd.execute-api.eu-west-1.amazonaws.com/prod/?content-id=${contentId}`
        );
        setContent(response.data);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };

    fetchContent();
  }, [contentId]);

  const markdownToPlainText = (markdown: string): string => {
    // TODO - Replace or handle any Markdown-specific syntax here
    // this example just removes Markdown headings (#)
    return markdown.replace(/#/g, "");
  };

  return (
    <View>
      {content ? (
        <Text>{markdownToPlainText(content)}</Text>
      ) : (
        <Text>Loading content...</Text>
      )}
    </View>
  );
};

export default Content;
