module.exports = (sequelize, Model, DataTypes) => {
  class Auth extends Model {}

  Auth.init(
    {
      // Model attributes are defined here
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
    },
    {
      // Other model options go here
      sequelize, 
      modelName: 'auth', 
      timestamps: false,
    }
  );
  return Auth;
};
