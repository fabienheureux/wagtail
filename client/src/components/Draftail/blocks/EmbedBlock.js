import PropTypes from 'prop-types';
import React from 'react';

import { STRINGS } from '../../../config/wagtailConfig';

import MediaBlock from '../blocks/MediaBlock';

/**
 * Editor block to display media and edit content.
 */
const EmbedBlock = props => {
  const { entity, onRemoveEntity } = props.blockProps;
  const { providerName, url, title, thumbnail } = entity.getData();

  return (
    <MediaBlock {...props} src={thumbnail} alt="">
      {url ? (
        <a
          className="Tooltip__link EmbedBlock__link"
          href={url}
          title={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
          {providerName}, {url}
        </a>
      ) : null}

      <button className="button button-secondary no Tooltip__button" onClick={onRemoveEntity}>
        {STRINGS.DELETE}
      </button>
    </MediaBlock>
  );
};

EmbedBlock.propTypes = {
  blockProps: PropTypes.shape({
    entity: PropTypes.object,
  }).isRequired,
};

export default EmbedBlock;
