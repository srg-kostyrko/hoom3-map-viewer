import React, { useCallback } from "react";
import { useAppStore } from "../../store/AppStore";
import { readFile } from "../../helpers/file";
import { parseH3MFile } from "homm3-parsers";

export function LoadMapButton() {
  const app = useAppStore();

  const onInputChange = useCallback(
    async e => {
      const { files } = e.target;
      if (files.length) {
        const [file] = files;
        const content = await readFile(file);
        const parsed = parseH3MFile(new Uint8Array(content));
        app.changeMap(parsed);
      }
    },
    [app]
  );

  return (
    <div>
      <label htmlFor="load-input">
        <input type="file" id="load-input" onChange={onInputChange} />
      </label>
    </div>
  );
}
