<?php if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Class NF_Field_Button
 */
class NF_Fields_Button extends NF_Abstracts_Field
{
    protected $_name = 'button';

    protected $_nicename = 'Button';

    protected $_group = 'standard_fields';

    protected $_type = '';

    public function __construct()
    {
        parent::__construct();

        $this->_nicename = __( 'Button', Ninja_Forms::TEXTDOMAIN );
    }

    public function validate( $value )
    {
        parent::validate( $value );
    }

}