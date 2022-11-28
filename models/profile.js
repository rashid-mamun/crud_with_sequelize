module.exports = (sequelize, Model, DataTypes) => {
  class Profile extends Model {}

  Profile.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      profilePhoto: {
        type: DataTypes.STRING,
      },

      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      // Other model options go here
      sequelize, 
      modelName: 'profile', 
      timestamps: false,
    }
  );

  return Profile;
};
