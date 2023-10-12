export default function MyComponent({ html, state }) {
  const { attrs = {} } = state;
  const { selected = "nothing yet" } = attrs;

  return html`
    <style>
      :host > ul {
        list-style: none;
      }
    </style>

    <div>
      <p>Which best describes your site:</p>
      <ul>
        <li id="feed">
          <label>
            <input name="type" value="feed" type="radio" ${selected === 'feed' ? 'checked="checked"' : ''} />
            <span>I have an RSS feed</span>
          </label>
        </li>
        <li id="url">
          <label>
            <input name="type" value="url" type="radio" ${selected === 'url' ? 'checked="checked"' : ''} />
            <span>I have my latest post on my homepage</span>
          </label>
        </li>
        <li id="cli">
          <label>
            <input name="type" value="cli-input" type="radio" ${selected === 'cli-input' ? 'checked="checked"' : ''} />
            <span>I prefer to run command line tools</span>
          </label>
        </li>
        <li id="cli2">
          <label>
            <input name="type" value="cli" type="radio" ${selected === 'cli' ? 'checked="checked"' : ''}/>
            <span>I don't want to rely on 3rd party services</span>
          </label>
        </li>
        <li id="complicated">
          <label>
            <input name="type" value="complicated" type="radio" ${selected === 'complicated' ? 'checked="checked"' : ''} />
            <span
              >It's complicated, I can make webmention notifications
              manually</span
            >
          </label>
        </li>
        <li id="docs">
          <label>
            <input name="type" value="docs" type="radio" ${selected === 'docs' ? 'checked="checked"' : ''}/>
            <span>None of this matches me</span>
          </label>
        </li>
      </ul>
    </div>

    <div>
      <p>You've selected: <strong>${selected}</strong></p>
    </div>

    <script type="module" src="/_public/browser/my-component.mjs"></script>`;
}
