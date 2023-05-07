export function truncateText(text, maxLength) {
    if(text){
        if (text.length <= maxLength) {
            return text;
          } else {
            const truncated = text.substring(0, maxLength - 3) + "...";
            return truncated;
          }
    }
    
  }
  