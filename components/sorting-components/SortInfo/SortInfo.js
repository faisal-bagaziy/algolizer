import React from 'react';
import PropTypes from 'prop-types';
import styles from './SortInfo.module.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { srcery } from 'react-syntax-highlighter/dist/cjs/styles/hljs';


const SortInfo = ({
  title,
  description,
  worstCase,
  avgCase,
  bestCase,
  space,
  codeString
}) => {
  return (
    <div className={styles.SortInfo}>
      <hr />
      <h1>{title}</h1>

      <div className={styles.SortInfo__Body}>
        <article className={styles.SortInfo__Article}>
               {description}
        </article>

        <aside className={styles.SortInfo__Aside}>
          <h3>Performance</h3>
          <table>
            <tbody>
              <tr>
                <td>Worst-case time complexity</td>
                <td>
                  <code>{worstCase}</code>
                </td>
              </tr>

              <tr>
                <td>Average time complexity</td>
                <td>
                  <code>{avgCase}</code>
                </td>
              </tr>

              <tr>
                <td>Best-case time complexity</td>
                <td>
                  <code>{bestCase}</code>
                </td>
              </tr>

              <tr>
                <td>Worst-case space complexity</td>
                <td>
                  <code>{space}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </aside>
        <aside className={styles.SortInfo__Aside}>
            <h3>Psudocode</h3>
             <article className={styles.SortInfo__Article}>
                    <SyntaxHighlighter language="javascript" style={srcery} showLineNumbers={true}>
                    {codeString}
                     </SyntaxHighlighter>
            </article>
        </aside>

      </div>
    </div>
  );
};

SortInfo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  worstCase: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  avgCase: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bestCase: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  space: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export default SortInfo;

